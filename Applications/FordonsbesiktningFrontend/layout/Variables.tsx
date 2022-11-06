import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
:root {
    /* Global Colors*/
    --background-fade: linear-gradient(90deg, rgba(211,211,211,0.35) 0%, rgba(229,229,229,0.2) 100%);
    --border-color: rgba(129, 129, 129, 0.2);
    --text-fade: linear-gradient(160deg, #a932e0 0%, #e914a2 100%);
    --dark-grey: rgba(195, 195, 195, 0.6);

    /* Box shadows */
    --shadow-s: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    --shadow-m: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    --shadow-l: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
`;

export default Variables;
