export default function gerar3bruxos(tres, setTres, students){
    const output = []
    while(output.length < 3){
        const student = students[Math.floor(Math.random() * students.length)]
        const casaTres = output ? output.map(mago=>mago.house) : tres
        if(casaTres.indexOf(student.house) === -1){
            output.push(student)
        }
    }
    setTres(output)
}