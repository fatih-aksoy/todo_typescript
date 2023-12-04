import { Todolist } from "./TodoList";

function App() {
  return (
    <div className="App">
      <Todolist />
    </div>
  );
}

export default App;

//! NOT export Todolist icerisonde Toplam 4 tane const (degisken) kullandik
// 1 TodoList componenti acariz. sonra sonu App.tsx e import ederiz.
// 2 index.css hazirlanir
// 3 Todolist.tsx de interface belirlenir
// 4 state kurulur, ve state icerinde array formati icinde id; text, boolean derler belirlerni. bunlar todo nun ilk  elemanlaridir.
// 5 sonra bu elamanlar ul ve li icerisnde map()  fonk. ile map lenir.
// 6 const handletoggle ile todolarin uzueirne cizdik,
// 7 const handleClick ile yeni todalar ekeledik.
// 8 silme butonu yapilabilir, 
