
export const cableInput = [
    {
        label: "SmartCard/IUC Number",
        name: "smartCard",
        type: "text",
        required: true,
        placeholder: "Enter smartcard number",
       
    },
    {
        label: 'Cable Type',
        name: "cabletype",
        type: "select",
        required: true,
        options:[
            {
              label: "Dstv",
              value: "DSTV",
            },
            {
              label: "Gotv",
              value: "GOTV",
            },
            {
              label: "Starttime",
              value: "STARTIMES",
            },
          ],
    },
    {
        label:"Package",
        name: "package",
        type: "select",
        required: true,
        options: [
            {
               label:'DStv Padi',
               value:"dStv Padi",
               price:3639,
            },
            {
               label:'DStv Yanga',
               value:"dstv-yanga",
               price:5139
            },
            {
               label:'DStv Asia',
               value:"dstv6",
               price:12000
            },
            {
               label:'DStv Compact',
               value:"dstv79",
               price:15739
            },
            {
               label:'DStv Premium-French',
               value:"dstv9",
               price:50000
            },
            {
               label:'GOtv Smallie',
               value:"gotv-smallie",
               price:1605
            },
            {
               label:'GOtv Jinja',
               value:"gotv-jinja",
               price:3339
            },
            {
               label:'GOtv Jolli',
               value:"gotv-jolli",
               price:4889
            },
            {
               label:'GOtv Max',
               value:"gotv-max",
               price:7239
            },
            {
               label:'GOtv Supa',
               value:"gotv-supa",
               price:15739
            },
            {
               label:'Startimes Nova',
               value:"nova",
               price:1539
            },
            {
               label:'Startimes Basic',
               value:"basic",
               price:3039
            },
            {
               label:'Startimes Smart',
               value:"smart",
               price:3539
            },
            {
               label:'Startimes Classic',
               value:"classic",
               price:3839
            },
            {
               label:'Startimes Super',
               value:"super",
               price:6539
            },
           
           
        ]
    },
    {
        label: 'Amount',
        name: "amount",
        type: "text",
        required: true,
        
    },
    {
        label: 'Phone Number',
        name: "phone",
        type: "text",
        required: true,
        
    },
];


