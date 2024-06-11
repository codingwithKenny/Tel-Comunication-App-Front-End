
export const ElectrcityInput = [
    {
        label: "Meter Number",
        name: "meternumber",
        type: "text",
        required: true,
        placeholder: "Enter phone number"
    },
    {
        label: 'Meter Type',
        name: "metertype",
        type: "select",
        required: true,
        options:[
            {
              label: "Prepaid",
              value: "prepaid",
            },
            {
              label: "Postpaid",
              value: "postpaid",
            },
          ],
    },
    {
        label:"Electricity Company",
        name: "electricitycompany",
        type: "select",
        required: true,
        options: [
            {
               label:'Abuja (AEDC)',
               value:"abuja-electric"
            },
            {
               label:'Eko (EKEDC)',
               value:"eko-electric"
            },
            {
               label:'Ibadan (IBEDC)',
               value:"ibadan-electric"
            },
            {
               label:'Ikeja (IKEDC)',
               value:"ikeja-electric"
            },
            {
               label:'Jos (JEDplc)',
               value:"jos-electric"
            },
            {
               label:'Kaduna (KAEDCO)',
               value:"kaduna-electric"
            },
            {
               label:'Kano (KEDCO)',
               value:"kano-electric"
            },
            {
               label:'Portharcourt (PHED)',
               value:"portharcourt-electricc"
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
