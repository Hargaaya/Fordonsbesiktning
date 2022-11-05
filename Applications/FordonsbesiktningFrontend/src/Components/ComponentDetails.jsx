import React from "react";

const ComponentDetails = ({ componentInformation }) => {
  return (
    <div className="component-details">
      <Control controlPoints={componentInformation.control} />
      <Methods controlMethods={componentInformation.method} />
      <Assessment assessment={componentInformation.assessment} componentName={componentInformation.Name} />
    </div>
  );
};

const Control = ({ controlPoints }) => {
  return (
    <div className="control">
      <p className="bolden">Att kontrollera</p>
      {controlPoints.map((control, index) => (
        <p key={index}>
          <b>{control.point}</b> {control.detail}
        </p>
      ))}
    </div>
  );
};

const Methods = ({ controlMethods }) => {
  return (
    <div className="methods">
      <p className="bolden">Kontrollmetoder</p>
      {controlMethods.map((method, index) => (
        <p key={index}>
          <b>{method.type}</b> {method.description}
        </p>
      ))}
    </div>
  );
};

const Assessment = ({ assessment, componentName }) => {
  return (
    <div className="assessment">
      <p className="bolden">Bedömning</p>
      {assessment !== null ? <p> {assessment}</p> : <p>Komponenten {componentName} saknar enskild definerad bedömning.</p>}
    </div>
  );
};

export default ComponentDetails;

// {
//     "id": "1.1.1",
//     "name": "Ram",
//     "subsystems": [],
//     "control": [
//         {
//             "point": "Fastsättning",
//             "points": null,
//             "detail": "Med fastsättning avses även gummikuddar och liknande som används för fastsättning av t.ex. fram-/bakvagnsram."
//         },
//         {
//             "point": "Skador",
//             "points": null,
//             "detail": null
//         }
//     ],
//     "method": [
//         {
//             "type": "Okulärkontroll",
//             "types": null,
//             "description": "underifrån och från sidan. Tunga fordon kontrolleras när krafter påförs med kraftplatta eller verktyg. Upptäcks skador som tyder på skevhet görs jämförelsemätning. Slutlig bedömning sker efter provkörning där skevhetens inverkan på körbarheten ska vara avgörande."
//         },
//         {
//             "type": "Rostskadekontroll",
//             "types": null,
//             "description": "med kontrollverktyg utförs då rostangrepp konstateras."
//         },
//         {
//             "type": "Mätning",
//             "types": null,
//             "description": "utförs vid tveksamhet om bedömning."
//         }
//     ],
//     "assessment": "Med rostskada menas mjukrost eller godsbortfall på grund av skadan. Mjukrost i form av sådan jäsning eller skiktning som förekommer t.ex. mellan ramfläns och förstärkning ska i normalfallet endast bedömas i kombination med annan skada, t.ex. sprickor. Övriga skador som ska bedömas förutom sprickor är deformationer. Omfattningen på en rostskada i separat ram bestäms genom att uppskatta skadans inverkan på ramens bärighet. Vid bedömning av godsbortfall räknas ramens flänsar var för sig."
// }
