var customerSchema = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "fName",
        "lName",
        "email",
        "password",
        "transactions",
        "balance"
    ],
    "properties": {
        "fName": {
            "type": "string",
            "default": "",
            "title": "The fName Schema",
            "examples": [
                ""
            ]
        },
        "lName": {
            "type": "string",
            "default": "",
            "title": "The lName Schema",
            "examples": [
                ""
            ]
        },
        "email": {
            "type": "string",
            "default": "",
            "title": "The email Schema",
            "examples": [
                ""
            ]
        },
        "password": {
            "type": "string",
            "default": "",
            "title": "The password Schema",
            "examples": [
                ""
            ]
        },
        "transactions": {
            "type": "array",
            "default": [],
            "title": "The transactions Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "deposit",
                    "withdraw"
                ],
                "properties": {
                    "deposit": {
                        "type": "array",
                        "default": [],
                        "title": "The deposit Schema",
                        "items": {
                            "type": "object",
                            "title": "A Schema",
                            "required": [
                                "amount",
                                "time"
                            ],
                            "properties": {
                                "amount": {
                                    "type": "integer",
                                    "default": 0,
                                    "title": "The amount Schema",
                                    "examples": [
                                        0
                                    ]
                                },
                                "time": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The time Schema",
                                    "examples": [
                                        ""
                                    ]
                                }
                            },
                            "examples": [{
                                "amount": 0
                            },
                            {
                                "time": ""
                            }]
                        },
                        "examples": [
                            [{
                                "amount": 0
                            },
                            {
                                "time": ""
                            }]
                        ]
                    },
                    "withdraw": {
                        "type": "array",
                        "default": [],
                        "title": "The withdraw Schema",
                        "items": {
                            "type": "object",
                            "title": "A Schema",
                            "required": [
                                "amount",
                                "time"
                            ],
                            "properties": {
                                "amount": {
                                    "type": "integer",
                                    "default": 0,
                                    "title": "The amount Schema",
                                    "examples": [
                                        0
                                    ]
                                },
                                "time": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The time Schema",
                                    "examples": [
                                        ""
                                    ]
                                }
                            },
                            "examples": [{
                                "amount": 0
                            },
                            {
                                "time": ""
                            }]
                        },
                        "examples": [
                            [{
                                "amount": 0
                            },
                            {
                                "time": ""
                            }]
                        ]
                    }
                },
                "examples": [{
                    "deposit": [{
                        "amount": 0
                    },
                    {
                        "time": ""
                    }]
                },
                {
                    "withdraw": [{
                        "amount": 0
                    },
                    {
                        "time": ""
                    }]
                }]
            },
            "examples": [
                [{
                    "deposit": [{
                        "amount": 0
                    },
                    {
                        "time": ""
                    }]
                },
                {
                    "withdraw": [{
                        "amount": 0
                    },
                    {
                        "time": ""
                    }]
                }]
            ]
        },
        "balance": {
            "type": "integer",
            "default": 0,
            "title": "The balance Schema",
            "examples": [
                0
            ]
        }
    },
    "examples": [{
        "fName": "",
        "lName": "",
        "email": "",
        "password": "",
        "transactions": [{
            "deposit": [{
                "amount": 0
            },
            {
                "time": ""
            }]
        },
        {
            "withdraw": [{
                "amount": 0
            },
            {
                "time": ""
            }]
        }],
        "balance": 0
    }]
}