import { useState } from "react";

function Todo() {
  let todolist
   = [
    {
      id: 1,
      title: " lorem ipsun1",
      complete: true,
    },
    {
      id: 2,
      title: " lorem ipsun2",
      complete: false,
    },
    {
      id: 3,
      title: " lorem ipsun3",
      complete: false,
    },
    {
      id: 4,
      title: " lorem ipsun4",
      complete: true,
    },
  ];

  let [todo, settodo] = useState(todolist
    );
  let [todoadd, setTodoAdd] = useState("");
  function chekedi(clickend) {
    let newmasivi = todolist
    .map((item) => {
      if (item.id === clickend.id) {
        item.complete = !item.complete;
      }
      return item;
    });
    settodo(newmasivi);
  }

  // ramdeni davaleba sul ramdeni dawshili randemni waushleli
  let totalitem = todo.length;
  let completeitem = todo.filter((item) => item.complete).length;
  let itenocomplete = todo.filter((item) => !item.complete).length;

  function addtodo(e) {
    e.preventDefault();
    let newitemei = [
      {
        id: Date.now(),
        title: todoadd
,
        complete: false,
      },
      ...todo,
    ];
    settodo(newitemei);
    setTodoAdd
    ("");
  }
  function itemdelete(itemid) {
    settodo(todo.filter((item) => item.id !== itemid));
  }
  return (
    <>
      <form action="" onSubmit={addtodo}>
        <input
          type="text"
          value={todoadd
}
          onChange={(e) => setTodoAdd
            (e.target.value)}
        />
        <button>damateba</button>
      </form>
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.complete ? "complete" : ""}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => chekedi(item)}
            />
            {item.title}
            <button onClick={() => itemdelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      sul{totalitem} ,shesrulebuli{completeitem}, sheusrulebeli{itenocomplete}
    </>
  );
}

export default Todo;
