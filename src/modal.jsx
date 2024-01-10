import { TrashIcon, EditIcon, AddIcon, CloseIcon } from "./icons";
import { useState, useEffect } from "react";
const Modal = ({ open, close, submit, obj }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [render, setRender] = useState(false);
   const [foodItem, setFoodItem] = useState({
      id: "",
      descr:"",
      cat: "food",
      stock: "0",
   });

   const handleChange = (e) => {
      const { dataset, value } = e.target;
      setFoodItem((prev) => {
         return {
            ...prev,
            [dataset.input]: value,
         };
      });
      console.log(foodItem)
   };

   
   useEffect(() => {
      if (open) document.querySelector("body").classList.add("no__scroll");
      else document.querySelector("body").classList.remove("no__scroll");
      setFoodItem(obj);
      if (open) {
         setModalOpen(open);
         setTimeout(() => {
            setRender(open);
         }, 1);
      } else {
         setRender(open);
         setTimeout(() => {
            setModalOpen(open);
         }, 200);
      }
   }, [open, obj]);
   return (
      <>
         {modalOpen && foodItem && (
            <>
               <div className={`modal__bg ${render ? "show-bg" : ""}`}></div>
               <div className={`modal ${render ? "show-modal" : ""}`}>
                  <div className="modal__form">
                     <div className="modal__descr">
                        <label htmlFor="">Descripción:</label> <br />
                        <textarea
                           value={foodItem.descr}
                           onChange={handleChange}
                           data-input="descr"
                           id=""
                           cols="30"
                           rows="10"
                           placeholder="Descripcion o nombre del producto"
                        ></textarea>
                     </div>
                     {/* // input option----------- */}
                     <div className="modal__category">
                        <label htmlFor="">Categoria:</label>
                        <div className="card__radio-food">
                           <label htmlFor="">
                              <input
                                 type="radio"
                                 name="cat"
                                 value="food"
                                 data-input="cat"
                                 onChange={handleChange}
                                 checked ={foodItem.cat=="food"?true:false}
                              />{" "}
                              Comida
                           </label>
                        </div>
                        <div className="card__radio-drink">
                           <label htmlFor="">
                              <input
                                 type="radio"
                                 name="cat"
                                 value="drink"
                                 data-input="cat"
                                 onChange={handleChange}
                                 checked ={foodItem.cat=="drink"?true:false}
                              />{" "}
                              Bebida
                           </label>
                        </div>
                     </div>
                     <div className="modal__stock">
                        <label htmlFor="">Stock:</label> <br />
                        <input
                           data-input="stock"
                           onChange={handleChange}
                           name="stock"
                           type="number"
                           min="0"
                           value={foodItem.stock}
                        />
                     </div>
                     <div className="modal__btns">
                        <button
                           onClick={() => {
                              submit(
                                 foodItem.descr,
                                 foodItem.cat,
                                 foodItem.stock
                              );
                              close();
                              setFoodItem({});
                           }}
                        >
                           Aceptar <AddIcon className="modal__btn-icon" />
                        </button>
                        <button
                           onClick={() => {
                              close();
                              setFoodItem({});
                           }}
                        >
                           Cancelar <CloseIcon className="modal__btn-icon" />
                        </button>
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   );
};

export default Modal;
