import React from "react";

const ProgressBar = ({ project }) => {
  const tasksByProjectId = project?.tasks;
  const taksCompleted = tasksByProjectId?.filter(
    (item) => item.isComplete === true
  ).length;
  const tasksTotal = tasksByProjectId?.length;
  const progress = Math.round((taksCompleted / tasksTotal) * 100);
  return (
    <div className="progressbar">
      <div
        className="progressbar__porcentaje"
        style={{ width: tasksTotal === 0 ? "0%" : `${progress}%` }}
      >
        <p className="progressbar__text flex-center">
          {tasksTotal === 0 ? "SIN TAREAS" : progress + "% completado"}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
