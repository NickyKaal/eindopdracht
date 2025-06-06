import showContentIcon from "../../assets/icons/eye-open.svg";
import hideContentIcon from "../../assets/icons/eye-closed.svg";

export const state={
    hidden:true
}

const iconDefinitionsMap = new Map();
iconDefinitionsMap.set(true, {
    icon:showContentIcon
    ,name:"showContentIcon"
    ,alt:"Show content icon"
    ,inline:true
    ,onClick:handleHideContent
});
iconDefinitionsMap.set(false, {
    icon:hideContentIcon
    ,name:"hideContentIcon"
    ,alt:"Hide content icon"
    ,inline:true
    ,onClick:handleHideContent
});


