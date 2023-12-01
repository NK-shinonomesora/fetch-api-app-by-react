interface Version {
    version: string
}

interface GetManagementI extends NormalResponseI {
    data: Version
}

