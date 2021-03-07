export const mapObjectToArray = (obj: any) => {
    const mappedDatas: any[] = []
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            mappedDatas.push({ ...obj[key], id: key })
        }
    }
    return mappedDatas
}

function isFirebaseValidKey(text: any) {
    return typeof text === 'string' &&
        text[0] === '-' &&
        text[5] === '_' &&
        text.length == 20
}

const listProperties = (obj: any): string[] => Object.getOwnPropertyNames(obj)

const hasAllFirebaseKeysInside = (variable: any) => listProperties(variable).every(isFirebaseValidKey)

const formatter = (objectToFormat: any, keyProperty = 'id'): any => {
    const isAnIterableProperty = (property: any): boolean => hasAllFirebaseKeysInside(objectToFormat[property]) && property in objectToFormat    

    const hasIterableProperties = (element: any): boolean => listProperties(element).some((property: any) => isAnIterableProperty(property))

    if (hasIterableProperties(objectToFormat)) {
        const properties = listProperties(objectToFormat)
        properties.map(property => {
            if (isAnIterableProperty(property)) {
                objectToFormat[property] = mapObjectToArray(objectToFormat[property])
                objectToFormat[property].forEach((nestedObj: any) => {
                    formatter(nestedObj, keyProperty)
                })
            }
        })
    }

    return objectToFormat
}

export default formatter


/// DEBUG BOOTSTRAP
const input = {
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

const result = formatter(input)

console.log(result)
