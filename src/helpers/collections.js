export const networkCollections = {
    "0x1": [
        {
            image: "https://th.bing.com/th/id/OIP.xXmTgH8kSynpuYdICJDMKgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
            name: "Bored Ape Yacht Club",
            addrs: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        },
        {
            image: "https://th.bing.com/th/id/OIP.I7qIQsZx5s7le55gUH4lmQAAAA?w=218&h=218&c=7&r=0&o=5&pid=1.7",
            name: "Crypto punks",
            addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        },
        {
            image: "https://th.bing.com/th/id/OIP._JOpqcNBTPYXY_G-owQcFQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
            name: "Mutant Ape Yacht Club",
            addrs: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
        },
        {
            image: "https://th.bing.com/th/id/OIP.pn6YbxlnH9bq3s4hv7-nUAHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
            name: "Cool cats",
            addrs: "0x1a92f7381b9f03921564a437210bb9396471050c",
        },
        {
            image: "https://th.bing.com/th/id/OIP.M3CsIkVRJ0E82mDDxIc5ZQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
            name: "Bored Ape Kennel Club",
            addrs: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
        },

    ],
    "0x13881": [
        {
            image: "https://playtoearn.net/img/dapp/ghost-block-nft/ghost-block-nft-KRqkU7ExBjcp.png",
            name: "Block head",
            addrs: "0x292f6f9e9897e14743f3d6cea38179c6f1c48541",
        },
        {
            image: "https://th.bing.com/th/id/OIP.x810rFYYXNRq-ku79Oz89QHaGL?w=177&h=180&c=7&r=0&o=5&pid=1.7",
            name: "Dragon Master",
            addrs: "0xab992136e4a101c773b68787e1d0978744692548",
        },
        {
            image: "https://th.bing.com/th/id/OIP.x810rFYYXNRq-ku79Oz89QHaGL?w=177&h=180&c=7&r=0&o=5&pid=1.7",
            name: "Test Collection",
            addrs: "0x1E98Cc6BaaC20C6773B9b7C21CD002b3265d2122",
        },
    ]
}

export const getCollectionsByChain = (chain) => networkCollections[chain];