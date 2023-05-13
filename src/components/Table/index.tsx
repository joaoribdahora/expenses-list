import { MouseEventHandler } from 'react';
import { category } from '../../data/category';
import { fixDate } from '../../helpers/filterDate';
import { infoType } from '../../types/types';
import './style.css';

type Props ={
    list: infoType[];
    delItem: (item: number) => void
}
export const Table = ({list, delItem}: Props) => {

    const background = (cat: string) => {
        let color = '';
        
        category.map((item,index)=>{
            if(cat === item.name){
                color = item.color;
            }
        });
  
        return color;
    }

  

    return(
        <table>
            <thead>
                <th>Data</th>
                <th>Categoria</th>
                <th>Título</th>
                <th>Valor</th>
            </thead>
            <tbody>
           
            {list.map((item, index)=>(
                <tr>
                    <td>{fixDate(item.date)}</td>
                    <td><span style={{backgroundColor: background(item.category)}}>{item.category}</span></td>
                    <td>{item.title}</td>
                    <td style={{color: (item.expense ? 'red' : 'green')}}>R$ {item.value}</td>
                    <div className='delete' onClick={()=>{delItem(index)}}>X</div>
                </tr>
            ))}
     
            </tbody>
        </table>
    )
}
