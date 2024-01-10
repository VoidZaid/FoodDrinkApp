import "./styles.css";
import { useState, useEffect } from "react";
import Modal from "./modal";
import CardItem from "./cardItem";
import { TrashIcon, EditIcon, AddIcon, CloseIcon } from "./icons";

// MODAL--------------------
export default function App() {
   const [food, setFood] = useState([
      {
         id: 0,
         descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore cum esse itaque soluta cumque nobis qui. Sunt voluptas nihil corporis vitae fuga. Cumque officia autem, vero ut adipisci repellendus.",
         cat: "food",
         stock: 20,
      },
      {
         id: 1,
         descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore cum esse itaque soluta cumque nobis qui. Sunt voluptas nihil corporis vitae fuga. Cumque officia autem, vero ut adipisci repellendus.",
         cat: "drink",
         stock: 20,
      },
   ]);
   const [open, setOpen] = useState(false);
   const showModal = () => {
      setOpen(true);
   };
   const closeModal = () => {
      setOpen(false);
   };
   const handleSubmit = (descr, cat, stock) => {
      setFood((prev) => {
         return [
            ...prev,
            {
               id: Math.floor(Math.random() * 1000000),
               descr: descr,
               cat: cat,
               stock: stock,
            },
         ];
      });
   };
   // second modal
   const [editModal, setEditModal] = useState(false);
   const [objModal, setObjModal] = useState({});
   const showEditModal = () => {
      setEditModal(true);
   };
   const closeEditModal = () => {
      setEditModal(false);
   };

   const editFood = (id) => {
      const object = food.find((item) => item.id === parseInt(id));
      setObjModal(object);
      showEditModal();
   };

   const handleEditSubmit = (descr, cat, stock) => {
      const idObj = objModal.id;
      setFood((prev) => {
         prev.map((e) =>
            e.id == idObj
               ? { ...e, descr: descr, cat: cat, stock: stock }
               : { e }
         );
      });
      console.log("gola");
   };

   const deleteFood = (id) => {
      const foods = food.filter((item) => item.id !== parseInt(id));
      setFood(foods);
   };
   return (
      <>
         <div className={`container}`}>
            <header className="header">
               <nav className="header__nav">
                  <div className="header__logo">
                     <a href="">
                        <img
                           src="https://png.pngtree.com/png-vector/20210915/ourlarge/pngtree-food-logo-vector-png-image_3930784.jpg"
                           alt=""
                        />
                     </a>
                  </div>
                  <ul className="header__list">
                     <li className="header__list-item">
                        <a href="#">Inicio</a>
                     </li>
                     <li className="header__list-item">
                        <a href="#">Productos</a>
                     </li>
                     <li className="header__list-item">
                        <a href="#">Nosotros</a>
                     </li>
                  </ul>
               </nav>
            </header>
            <div className="bg__container"></div>
            <div className="bg__image"></div>
            <div className="products__container">
               <h1 className="products__title">Hello World</h1>
               <div className="products__items__container">
                  {food.map((e) => (
                     <CardItem
                        key={e.id}
                        id={e.id}
                        descr={e.descr}
                        cat={e.cat}
                        stock={e.stock}
                        deleteFood={deleteFood}
                        editFood={editFood}
                     />
                  ))}
                  <div onClick={showModal}>
                     <AddIcon className="products__items__add" />
                  </div>
               </div>
            </div>
         </div>
         {/* modal */}
         <Modal open={open} close={closeModal} submit={handleSubmit} obj={{}} />
         <Modal
            open={editModal}
            close={closeEditModal}
            submit={handleEditSubmit}
            obj={objModal}
         />
      </>
   );
}
