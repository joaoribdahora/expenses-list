import { useEffect, useState } from 'react';
import './AppStyles.css';
import {Info} from './components/Info/index';
import { AddInfo } from "./components/AddInfo/index";
import { Table } from "./components/Table/index";
import { info } from './data/info';
import { getCurrentMonth, getFilteredList } from './helpers/filterDate';
import { infoType } from './types/types';

function App() {

  const [list, setList] = useState(info);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filterdList, setFilteredList] = useState<infoType[]>([]);

  useEffect(()=>{
    setFilteredList(getFilteredList(list, currentMonth));
  }, [list, currentMonth]);

  const changeDate = (nDate: string) => {
    setCurrentMonth(nDate);
  }

  const expenses = () => {
    let sExpenses = 0;
    for(let i in filterdList){
      if(filterdList[i].expense){
        sExpenses += filterdList[i].value;
      }
    }
    return sExpenses;
  }

  const income = () => {
    let sIncome = 0;
    for(let i in filterdList){
      if(filterdList[i].expense === false){
        sIncome += filterdList[i].value;
      }
    }
    return sIncome;
  }

  const newItem = (item: infoType) => {
    let newList: infoType[] = [...list];
    newList.push(item);
    setList(newList);
  }

  const delaItem = (item: number) => {
    let newList: infoType[] = [...list];
    newList.splice(item,1);
    setList(newList);
  }

  return (
   <>
      <header>
        <h1>
          Tabela de Finanças
        </h1>
      </header>
      <main>
        <section className="s-one">
          <Info 
            month={currentMonth}
            theNewDate={changeDate}
            expenseS={expenses}
            incomeS={income}
            
          />
        </section>
        <section className="s-two">
          <AddInfo add={newItem} />          
        </section>
        <section className="s-three">
          <Table list={filterdList} delItem={delaItem}/>
        </section>
      </main>
   </>
  );
}

export default App;
