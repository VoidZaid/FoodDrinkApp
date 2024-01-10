import { TrashIcon, EditIcon, AddIcon, CloseIcon } from "./icons";
const CardItem = ({ id, descr, cat, stock, deleteFood, editFood }) => {
   return (
     <div className="card">
       <input type="hidden" value={id} />
       <p className="card__description">{descr}</p>
       <div className="card__radio">
         <h3 className="card__radio-title">Categoria</h3>
         <p>{cat == "food" ? "Comida" : "Bebida"}</p>
       </div>
       <div className="card__stock">
         stock: <span>{stock ? stock : 0}</span>
       </div>
       <div className="card__actions">
         <button
           data-id={id}
           onClick={(e) => deleteFood(e.currentTarget.dataset.id)}
         >
           <TrashIcon className="card__actions-delete" />
         </button>
         <button
           data-id={id}
           onClick={(e) => editFood(e.currentTarget.dataset.id)}
         >
           <EditIcon className="card__actions-edit" />
         </button>
       </div>
     </div>
   );
 };

 export default CardItem;