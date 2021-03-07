const wellFormatedInput1 = {
    'name': 'Sebastian De Vita',
    'notebooks': {
        '-J4Dk_75HW97GkqhJSrt': {
            'notes': {
                '-H7Sf_75DG17GosaCXad': {
                    'title': 'Readme'
                },
                '-S5Ac_49SA24xawzAGbj': {
                    'title': 'Brainstorm ideas'
                }
            },
            'title': 'The best journal book'
        },
        '-S4Gh_31GJ30JhbpZBds': {
            'notes': {
                '-A5Gh_51HC34JabpZCsd': {
                    'title': 'Second Note'
                },
                '-B7Jl_51HA64ScdyCGgj': {
                    'title': 'First Note'
                }
            },
            'title': 'The Second Best Notebook'
        }
    }
}

const wellFormatedOutput1 = {
    name: 'Sebastian De Vita',
    notebooks: [{
        id: '-J4Dk_75HW97GkqhJSrt',
        title: 'The best journal book',
        notes: [
            {
                id: '-H7Sf_75DG17GosaCXad',
                title: 'Readme'
            },
            {
                id: '-S5Ac_49SA24xawzAGbj',
                title: 'Brainstorm ideas'
            }
        ]
    },
    {
        id: '-S4Gh_31GJ30JhbpZBds',
        title: 'The Second Best Notebook',
        notes: [
            {
                id: '-A5Gh_51HC34JabpZCsd',
                title: 'Second Note'
            },
            {
                id: '-B7Jl_51HA64ScdyCGgj',
                title: 'First Note'
            }
        ]
    }]
}

export { wellFormatedInput1, wellFormatedOutput1 }
