import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

export const defaultData = {
  counters: [
    { id: 1, name: "Drink 1", value: 4, type: "drink", price: 5.25 },
    { id: 2, name: "Drink 2", value: 5, type: "drink", price: 2.15 },
    { id: 3, name: "Food 1", value: 1, type: "food", price: 8.99 },
    { id: 4, name: "Drink 4", value: 0, type: "drink", price: 0.99 },
    { id: 5, name: "Food 2", value: 3, type: "food", price: 12 },
  ],
  buttons: [
    {
      id: 2,
      text: "Proceed to checkout",
      action: "Pay for items",
      buttonType: "success",
    },
    {
      id: 1,
      text: "Call a waiter",
      action: "Bring waiter to table number",
      buttonType: "warning",
    },
    {
      id: 3,
      text: "Go Back",
      action: "Go back to menu",
      buttonType: "danger",
    },
  ],
  sidebar: [
    { id: 1, text: "Home", icon: <AiIcons.AiFillHome /> },
    { id: 1, text: "Food Menu", icon: <BiIcons.BiFoodMenu /> },
    { id: 1, text: "Drinks Menu", icon: <BiIcons.BiDrink /> },
    { id: 1, text: "Nutrition", icon: <IoIcons.IoMdBody /> },
    { id: 1, text: "Contact", icon: <IoIcons.IoMdContacts /> },
  ],
};
