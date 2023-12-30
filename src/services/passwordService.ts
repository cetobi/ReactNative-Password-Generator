export default function generatePass(){
    let password: string = ''
    let passwordLength: number = 10
    let characters: string = 'abcddefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()'

    for(let i=0; i<passwordLength; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}