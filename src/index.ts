import terminal from "./ui/terminal";
import carregarPessoas from "./function/carregarPessoas";
import sortearAzarado from "./function/sortearAzarado";

const pessoas = carregarPessoas("src/data/dados.csv");
const azarado = sortearAzarado(pessoas);

terminal.clear();

terminal.white("\nO").brightRed(" AZARADO");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
terminal.bold.brightYellow(azarado.toString());
terminal("\n\n🎉🎉🎉🎉🎉🎉");
console.log();
