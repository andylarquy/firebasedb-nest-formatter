const wellFormatedInput1 = {
    name: 'Sebastian De Vita',
    notebooks: {
        '-J4Dk_75HW97GkqhJSrt': {
            notes: {
                '-H7Sf_75DG17GosaCXad': {
                    title: 'Readme'
                },
                '-S5Ac_49SA24xawzAGbj': {
                    title: 'Brainstorm ideas'
                }
            },
            title: 'The best journal book'
        },
        '-S4Gh_31GJ30JhbpZBds': {
            'notes': {
                '-A5Gh_51HC34JabpZCsd': {
                    title: 'Second Note'
                },
                '-B7Jl_51HA64ScdyCGgj': {
                    title: 'First Note'
                }
            },
            title: 'The Second Best Notebook'
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

const wellFormatedInput2 = [
    wellFormatedInput1,
    {
        name: 'Andres Suarez',
        notebooks: {
            '-D2Az_76SXA18sacAQli': {
                notes: {
                    '-A1Xh_15HYR45wuyCLhu': {
                        title: 'Apuntes Algo3'
                    }
                },
                title: 'Lista de la compra'
            }
        }
    }
]

const wellFormatedOutput2 = [
    wellFormatedOutput1,
    {
        name: 'Andres Suarez',
        notebooks: [{
            id: '-D2Az_76SXA18sacAQli',
            title: 'Lista de la compra',
            notes: [
                {
                    id: '-A1Xh_15HYR45wuyCLhu',
                    title: 'Apuntes Algo3'
                }
            ]
        }]
    }
]

const wellFormatedInput3 = {
    '-JiGh_31GA20JabpZBfa': {
        name: 'Sebastian De Vita',
        notebooks: {
            '-J4Dk_75HW97GkqhJSrt': {
                title: 'The best journal book',
                notes: {
                    '-H7Sf_75DG17GosaCXad': {
                        title: 'Readme'
                    },
                    '-S5Ac_49SA24xawzAGbj': {
                        title: 'Brainstorm ideas'
                    }
                }
            },
            '-S4Gh_31GJ30JhbpZBds': {
                title: 'The Second Best Notebook',
                notes: {
                    '-A5Gh_51HC34JabpZCsd': {
                        title: 'Second Note'
                    },
                    '-B7Jl_51HA64ScdyCGgj': {
                        title: 'First Note'
                    }
                }
            }
        }
    },
    '-Z0Wy_00HGB54noaLVoy': {
        name: 'Andres Suarez',
        notebooks: {
            '-D2Az_76SXA18sacAQli': {
                title: 'Lista de la compra',
                notes: {
                    '-A1Xh_15HYR45wuyCLhu': {
                        title: 'Apuntes Algo3'
                    }
                }
            }
        }
    }
}

const wellFormatedOutput3 = [
    {
        id: '-JiGh_31GA20JabpZBfa',
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
    },
    {
        id: '-Z0Wy_00HGB54noaLVoy',
        name: 'Andres Suarez',
        notebooks: [{
            id: '-D2Az_76SXA18sacAQli',
            title: 'Lista de la compra',
            notes: [
                {
                    id: '-A1Xh_15HYR45wuyCLhu',
                    title: 'Apuntes Algo3'
                }
            ]
        }]
    }
]

export { wellFormatedInput1, wellFormatedOutput1, wellFormatedInput2, wellFormatedOutput2, wellFormatedInput3, wellFormatedOutput3 }
