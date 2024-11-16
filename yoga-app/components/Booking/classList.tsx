import React from "react";

type YogaClass = {
  id: number;
  name: string;
  description: string;
  availableTimes: string[];
};

type ClassListProps = {
  classes: YogaClass[];
  onSelectClass: (yogaClass: YogaClass) => void;
};

const ClassList: React.FC<ClassListProps> = ({ classes, onSelectClass }) => {
  return (
    <div>
      <h2>Select a Class</h2>
      {classes.map((yogaClass) => (
        <div key={yogaClass.id}>
          <h3>{yogaClass.name}</h3>
          <p>{yogaClass.description}</p>
          <button onClick={() => onSelectClass(yogaClass)}>
            Book this Class
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
