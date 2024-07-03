export const DataInput = [
    {
        label: "Phone Number",
        name: "phonenumber",
        type: "text",
        required: true,
        placeholder: "Enter phone number"
    },
    {
        label: 'Network',
        name: "network",
        type: "text",
        required: true,
        readOnly: true
    },
    {
        label: 'Plan',
        name: "plan",
        type: "select",
        required: true,
        options: [
            {
                label: 'MTN Nigeria',
                options: [
                    { label: 'MTN SME Data 500MB – 30 Days', value: "500" ,price:199},
                    { label: 'MTN SME Data 1GB – 30 Days', value: "M1024", price:339},
                    { label: 'MTN SME Data 2GB – 30 Days', value: "M2024",price:679},
                    { label: 'MTN SME Data 3GB – 30 Days', value: "3000",price:1019},
                    { label: 'MTN SME Data 5GB – 30 Days', value: "5000",price:1699},
                    { label: 'MTN SME Data 10GB – 30 Days', value: "10000" ,price:3399},
                    { label: 'MTN Data 6GB – 7 Days', value: "mtn-20hrs-1500",price:1499 },
                    { label: 'MTN Data 30GB – 30 Days', value: "mtn-30gb-8000",price:7959 },
                    { label: 'MTN Data 40GB – 30 Days', value: "mtn-40gb-10000",price:9899 },
                    { label: 'MTN Data 75GB – 30 Days', value: "mtn-75gb-15000",price:14979 }
                ]
            },
            {
                label: "Glo Mobile (Globacom Ltd)",
                options: [
                    { label: "Glo Data 1GB – 5 Nights", value: "glo100x" ,price:99},
                    { label: "Glo Data 1.25GB – 1 Day (Sunday)", value: "glo200x" ,price:199},
                    { label: "Glo Data 1.35GB – 14 Days", value: "G500",price:489 },
                    { label: "Glo Data 5.8GB – 30 Days", value: "G2000" ,price:1949},
                    { label: "Glo Data 2.9GB – 30 Days", value: "G1000",price:979 },
                    { label: "Glo Data 7.7GB – 30 Days", value: "G2500" ,price:2449 },
                    { label: "Glo Data 10GB – 30 Days", value: "G3000" ,price:2949},
                    { label: "Glo Data 13.25GB – 30 Days", value: "G4000",price:3889},
                    { label: "Glo Data 18.25GB – 30 Days", value: "G5000",price:4849 },
                    { label: "Glo Data 29.5GB – 30 Days", value: "G8000",price:7799 },
                    { label: "Glo Data 50GB – 30 Days", value: "glo10000",price:9899 }
                ]
            },
            {
                label: "Airtel Nigeria",
                options: [
                    { label: "Airtel Data 500MB (Gift) – 30 Days", value: "AIRTEL500MB",price:199 },
                    { label: "Airtel Data 1GB (Gift) – 30 Days", value: "AIRTEL1GB",price:399 },
                    { label: "Airtel Data 2GB (Gift)– 30 Days", value: "AIRTEL2GB",price:679},
                    { label: "Airtel Data 5GB (Gift)– 30 Days", value: "AIRTEL5GB" ,price:1699},
                    { label: "Airtel Data 10GB (Gift)– 30 Days", value: "AIRTEL10GB",price:3399 },
                    { label: "Airtel Data 15GB (Gift)– 30 Days", value: "AIRTEL15GB",price:4999 },
                    { label: "Airtel Data 20GB (Gift)– 30 Days", value: "AIRTEL20GB",price:5999 },
                    { label: "Airtel Data 1.5GB – 30 Days", value: "airt-1100",price:1079 },
                    { label: "Airtel Data 2GB – 30 Days", value: "airt-1300",price:1289 },
                    { label: "Airtel Data 3GB – 30 Days", value: "airt-16500",price:1639},
                    { label: "Airtel Data 4.5GB – 30 Days", value: "airt-2200",price:2189},
                    { label: "Airtel Data 10GB – 30 Days", value: "airt-3300",price:3289},
                    { label: "Airtel Data 20GB – 30 Days", value: "airt-55000",price:5489},
                    { label: "Airtel Data 40GB – 30 Days", value: "airt-11000",price:10799},
                    { label: "Airtel Data 1GB – 1 Day", value: "airt-330x",price:329},
                    { label: "Airtel Data 750MB – 14 Days", value: "airt-550",price:545},
                    { label: "Airtel Data 6GB – 7 Days", value: "airt-1650-2",price:1639},
                
                ]
            },
            {
                label: "9Mobile",
                options: [
                    { label: "9mobile Data 1GB – 30 Days", value: "9MOB1000",price:989 },
                    { label: "9mobile Data 2.5GB – 30 Days", value: "9MOB34500",price:1989},
                    { label: "9mobile Data 11.5GB – 30 Days", value: "9MOB8000",price:7969 },
                    { label: "9mobile Data 15GB – 30 Days", value: "9MOB5000",price:9899 }
                
                ]
            }
        ]
    },
    {
        label: 'Amount',
        name: "amount",
        type: "text",
        required: true,
        // readOnly: true
    },
];
