import { infoType } from "../types/types";

export const getCurrentMonth = () => {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}`
};


export const getFilteredList = (list:infoType[] , date: string): infoType[] => {
    let newList: infoType[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}

export const fixDate= (date: Date) =>{
    return `${fixZero(date.getDate())}/${fixZero(date.getMonth()+1)}/${fixZero(date.getFullYear())}`;
}

export const fixZero = (n: number) => {
   return (n >=10 ? n : `0${n}`);
}

export const monthYear = (cDate: string) => {
    let [year, month] = cDate.split('-');
    let yMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${yMonth[(parseInt(month)-1)]} de ${year}`;
}