//= APP ======================================
export default function App() {
  return (
    <div className="mainapp-container">
      <AppLayout />
    </div>
  );
}

//= APP LAYOUT ======================================
function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="mainapp-path">
        <div className="left-component color">
          <ProgramList />
          <div className="center">
            <ActionButton>Add Program</ActionButton>
          </div>
        </div>
        <div className="right-component color">
          <ProgramDetails />
          <ExerciseList />
          <ExerciseProgress />
        </div>
      </div>
    </>
  );
}

//= NAVBAR ======================================
function Navbar() {
  return (
    <div className="navbar color center">
      <h1>FitMate App</h1>
    </div>
  );
}

//= PROGRAM LIST ======================================
function ProgramList() {
  return (
    <ul className="program-list">
      <ProgramItem />
      <ProgramItem />
      <ProgramItem />
      <ProgramItem />
    </ul>
  );
}

//= PROGRAM ITEM ======================================
function ProgramItem() {
  return (
    <li className="program">
      <div className="program-item">
        <span className="icon">Icon</span>
        <div className="program-title">
          <span className="program-name">Fullbody Workout</span>
          <span className="program-date">12 / 09 / 2027</span>
        </div>
        <div className="duration">
          <span>
            <strong>45</strong> min
          </span>
        </div>
      </div>
    </li>
  );
}

//= ACTION BUTTON ======================================
function ActionButton({ children }) {
  return <button className="button">{children}</button>;
}

//= PROGRAM DETAILS ======================================
function ProgramDetails() {
  return (
    <div className="program-details">
      <p className="program-details-name">Fullbody Workout</p>
      <div className="program-details-info">
        <p className="program-details-type">Weightlifting</p>
        <p className="program-details-date">12 / 09 / 2027</p>
      </div>
    </div>
  );
}

//= EXERCISE LIST ======================================
function ExerciseList() {
  return (
    <div className="exercise-layout">
      <ul>
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
        <ExerciseItems />
      </ul>
    </div>
  );
}

function ExerciseItems() {
  return (
    <li className="exercise-items">
      <div>Checkbox</div>
      <div>Exercise item details</div>
      <div>Delete button</div>
    </li>
  );
}

//= EXERCISE PROGRESS ======================================
function ExerciseProgress() {
  return (
    <div className="exercise-progress">
      <div className="progress-view">
        <span>Progress Exercise 80%</span>
      </div>
      <ActionButton>Add Exercise</ActionButton>
    </div>
  );
}
