function mapObjectToArray(obj: any, keyName: string) {
    const mappedDatas: any[] = []
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            mappedDatas.push({ ...obj[key], [keyName]: key })
        }
    }
    return mappedDatas
}

// This code repetition is in favor of semantics
const isRealtimeDBAutoGeneratedKey = (key: any) => (typeof key === 'string' &&
    key[0] === '-' &&
    key[5] === '_' &&
    key.length == 20)

//TODO: Test the new variation
const isCustomUIDKey = (key: any) => (typeof key === 'string' &&
    key[0] === '-' &&
    key[5] === '_' &&
    key.length == 28)

function isFirebaseValidKey(text: any) {
    return isRealtimeDBAutoGeneratedKey(text) || isCustomUIDKey(text)
}

function listProperties(obj: any): string[] {
    return Object.getOwnPropertyNames(obj)
}

function hasAllFirebaseKeysInside(variable: any): boolean {
    return listProperties(variable).every(isFirebaseValidKey)
}

/**
 * Flattens the format recieved from the Firebase Realtime Database
 * @constructor
 * @param {JSON|Array.<Object>} data - The data that's attempt to format, it should be extracted from Firebase's ```DataSnapshot``` .
 * @param {string} [key='id'] - Name of the new attribute that contains the entities's ids.
 */
export default function firebaseDbFormatter(data: any, key = 'id'): any {
    if (Array.isArray(data)) {
        return data.map(obj => firebaseDbObjectFormatter(obj, key))
    } else {
        return firebaseDbObjectFormatter(data, key)
    }

}

function firebaseDbObjectFormatter(obj: any, key = 'id'): any {
    const isAnIterableProperty = (property: any): boolean => hasAllFirebaseKeysInside(obj[property]) && property in obj

    const isAnIterablePropertyCustom = (obj: any, property: any): boolean => hasAllFirebaseKeysInside(obj[property]) && property in obj

    const hasIterablePropertiesCustom = (element: any): boolean => listProperties(element).some((property: any) => isAnIterablePropertyCustom(element, property))

    const hasIterableProperties = (element: any): boolean => listProperties(element).some((property: any) => isAnIterableProperty(property))

    const isAListOfIterables = (element: any): boolean => listProperties(element).every(property => isFirebaseValidKey(property))

    if (hasIterableProperties(obj)) {
        const properties = listProperties(obj)
        properties.map(property => {
            if (isAnIterableProperty(property)) {
                obj[property] = mapObjectToArray(obj[property], key)
                obj[property].forEach((nestedObj: any) => {
                    firebaseDbFormatter(nestedObj, key)
                })
            }
        })
    }

    //TODO: Fix this absolute piece of garbage
    if (isAListOfIterables(obj)) {
        const listOfIds = listProperties(obj)

        listOfIds.map(id => {
            const insideObj = obj[id]

            if (hasIterablePropertiesCustom(insideObj)) {
                const properties = listProperties(insideObj)
                properties.map(property => {
                    if (isAnIterablePropertyCustom(insideObj, property)) {
                        insideObj[property] = mapObjectToArray(insideObj[property], key)
                        insideObj[property].forEach((nestedObj: any) => {
                            firebaseDbFormatter(nestedObj, key)
                        })
                    }
                })
            }
        })


        const newObj: any[] = []
        listOfIds.map(id => {
            newObj.push({ [key]: id, ...obj[id] })
        })

        return newObj
    }

    return obj
}
