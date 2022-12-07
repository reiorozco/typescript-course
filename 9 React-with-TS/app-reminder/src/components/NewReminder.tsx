import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple Validation
    if (!title) return;

    onAddReminder(title);

    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>

      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control w-50"
      />

      <button type="submit" className="btn btn-primary my-2 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
