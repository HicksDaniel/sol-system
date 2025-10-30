export type TleData = {
  name?: string;
  line1: string;
  line2: string;
};

export default async function TleParser(raw: string): Promise<TleData[]> {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const result: TleData[] = [];

  let i = 0;
  while (i < lines.length) {
    const maybe = lines[i];
    if (
      maybe.startsWith("1 ") &&
      lines[i + 1] &&
      lines[i + 1].startsWith("2 ")
    ) {
      // no name line
      result.push({ line1: maybe, line2: lines[i + 1] });
      i += 2;
    } else if (
      lines[i + 1] &&
      lines[i + 1].startsWith("1 ") &&
      lines[i + 2] &&
      lines[i + 2].startsWith("2 ")
    ) {
      // name line + two lines
      result.push({ name: maybe, line1: lines[i + 1], line2: lines[i + 2] });
      i += 3;
    } else {
      // unexpected formatting, skip one line
      i += 1;
    }
  }

  return result;
}
