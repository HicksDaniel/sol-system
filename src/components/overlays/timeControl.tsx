import React from "react";
import { useTimeManager } from "../../libs/utils/timeManager";
import { timeSpeedLabels } from "../../libs/constants/time";

export default function timeControl() {
  const [timeMultiplier, setTimeMultiplier] = useTimeManager();

  const getTimeSpeedLabel = (multiplier: number): string => {
    const speedOption = timeSpeedLabels.find(
      (option) => option.value === multiplier
    );
    return speedOption?.label || `${multiplier}x`;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 1000,
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <label
        htmlFor="speed-control"
        style={{ display: "block", marginBottom: "5px" }}
      >
        Time Speed: {getTimeSpeedLabel(timeMultiplier)}
      </label>
      <select
        id="speed-control"
        value={timeMultiplier}
        onChange={(e) => {
          const select = e.target as HTMLSelectElement;
          setTimeMultiplier(Number(select.value));
        }}
        style={{
          padding: "5px",
          fontSize: "14px",
          backgroundColor: "#333",
          color: "white",
          border: "1px solid #555",
          borderRadius: "4px",
        }}
      >
        {timeSpeedLabels.map(({ value, description }) => (
          <option key={value} value={value}>
            {description}
          </option>
        ))}
      </select>
    </div>
  );
}
