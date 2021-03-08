function mapObjectToArray(obj: any, keyName: string) {
    const mappedDatas: any[] = []
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            mappedDatas.push({ ...obj[key], [keyName]: key })
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

    const hasIterableProperties = (element: any): boolean => listProperties(element).some((property: any) => isAnIterableProperty(property))

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

    return obj
}
