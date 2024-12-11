import { Store } from "pullstate";

type ButtonDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
};

type ButtonType = "button1" | "button2" | "button3";

export const SpecialityStore = new Store({
  selectedButton: "button1" as ButtonType,
  buttonData: {
    button1: {
      title: "Button 1 Details",
      description: "Detailed information for Button 1",
      content: "Specific content related to Button 1",
      footer: "Footer information for Button 1",
    },
    button2: {
      title: "Button 2 Details",
      description: "Detailed information for Button 2",
      content: "Specific content related to Button 2",
      footer: "Footer information for Button 2",
    },
    button3: {
      title: "Button 3 Details",
      description: "Detailed information for Button 3",
      content: "Specific content related to Button 3",
      footer: "Footer information for Button 3",
    },
  },
});
