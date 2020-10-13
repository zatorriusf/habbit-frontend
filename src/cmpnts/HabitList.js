import React from "react";
import Habit from "../cmpnts/Habit";
import {
  trackHabit,
} from "../helpers/HabitHelpers";

export default function HabitList({ habits, setHabits,viewHabitDetails,openHabitModal }) {

  return (
    <>
      {habits.map((habit) => {
        return (
          <Habit
            title={habit.title}
            desc={habit.desc}
            streak={habit.currentStreak}
            _id={habit._id}
            key={habit._id}
            frequency={habit.frequency}
            lastActivity={habit.lastActivity || null}
            handleHabitModal={openHabitModal}
            viewHabitDetails={viewHabitDetails}
            trackHabit={trackHabit}
          />
        );
      })}
    </>
  );
}
