const express = require('express')
const router = express.Router();
const debug = require('debug')(`${process.env.name}:forms`)

const forms =
    [
        {
            "title":"form1",
            "id":"1",
            "fields": [
                {
                    "name": "First_Name",
                    "title": "First Name",
                    "type": "Text",
                    "required": true
                },
                {
                    "name": "Loc",
                    "title": "Your Location",
                    "type": "Location",
                    "required": false
                },

                {
                    "name": "Request_Type",
                    "title": "Request Type",
                    "type": "Text",
                    "options": [
                        { "label": "Help", "value": "Help" },
                        { "label": "Info", "value": "Information" }
                    ]
                },
                {
                    "name": "Base_Location",
                    "title": "Base Location",
                    "type": "Location",
                    "options": [
                        { "label": "Base1", "value": { "lat": "1.2", "long": "3.2" } },
                        { "label": "Base2", "value": { "lat": "2.3", "long": "1.434" } }
                    ]
                }
            ]
            
        },
        {
            "title": "یک لیست نمونه",
            "id": "2",
            "fields": [
                {
                    "name": "First_Name",
                    "title": "First Name",
                    "type": "Text",
                    "required": true
                },
                {
                    "name": "Loc",
                    "title": "Your Location",
                    "type": "Location",
                    "required": false
                },

                {
                    "name": "Request_Type",
                    "title": "Request Type",
                    "type": "Text",
                    "options": [
                        { "label": "Help", "value": "Help" },
                        { "label": "Info", "value": "Information" }
                    ]
                },
                {
                    "name": "Base_Location",
                    "title": "Base Location",
                    "type": "Location",
                    "options": [
                        { "label": "Base1", "value": { "lat": "1.2", "long": "3.2" } },
                        { "label": "Base2", "value": { "lat": "2.3", "long": "1.434" } }
                    ]
                },
                {
                    "name": "damaged_Location2",
                    "title": "damage Location",
                    "type": "Location",
                    "options": [
                        { "label": "Base1", "value": { "lat": "1.2", "long": "3.2" } },
                        { "label": "Base2", "value": { "lat": "2.3", "long": "1.434" } }
                    ]
                }
            ]
        }
    ]

router.get('/', function (req, res) {
    debug(`rest request for getting all form titles`)
    res.send(forms.map(form => {
        return { title: form.title, id: form.id }
    }))
})

router.get('/:id', function (req, res) {
    debug(`rest request for getting form with id ${req.params.id}`)
    res.send(forms.filter((form) => {
        return form.id === req.params.id
    })[0])
})

module.exports = router