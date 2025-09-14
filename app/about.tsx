import Header from "@/Components/Header";
import SocialMidia from "@/Components/SocialMidia";
import { Colors, Images } from "@/constants/Constants";
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Sobre() {


    return (
        <ScrollView style={style.container}>

            <Header title="Sobre" backLink="/main" />

            <Image style={style.logo} source={Images.logo} />

            <View style={style.textContainer}>
                <Text style={style.h1} >Sobre o Totoloto</Text>
                <Text style={style.p}>
                    Oiê! Seja muito bem-vindo(a) ao Totoloto, onde a diversão é garantida e a sorte é quem manda!
                </Text>
                <Text style={style.p}>
                    A <Text style={style.bold}>UpCasi Company</Text> criou esse joguinho com muito carinho pra te ajudar a decidir aquela dúvida entre amigos,
                    familiares ou colegas - tudo de um jeito leve, rápido e super divertido.
                </Text>
                {/* como funciona */}
                <View>
                    <Text style={style.h2}>
                        Como funciona?
                    </Text>
                    <Text style={style.p}>
                        O processo é simples e cheio de emoção:
                    </Text>

                    <View style={{ paddingLeft: 50 }}>
                        <Text style={{}}>1. Digita os nomes dos participantes</Text>
                        <Text style={{}}>2. Clica em "Sortear"</Text>
                        <Text style={{}}>3. E deixa a sorte fazer o seu trabalho</Text>
                    </View>

                    <Text style={style.p}>
                        Pode para ver quem vai buscar o lanche, quem começa o jogo ou só para brincar mesmo.
                        Aqui mesmo, <Text style={style.bold}>todo mundo participa do jogo</Text>, mas só 2 ou mais sairão vitoriosos desta vez!
                    </Text>
                </View>
                {/* por que criamos */}
                <View>
                    <Text style={style.h2}>Por que criamos?</Text>
                    <Text style={style.p}>
                        Sabe aquele momento em que ninguém quer decidir nada e todo mundo joga a
                        responsablidade para o outro? Então... pensamos: "E se a sorte dicidisse por nós?" - e pronto,
                        nasceu o nosso jogo! Um jeito divertido de transformar decisões em risadas.
                    </Text>
                </View>
                {/* quem pode jogar */}
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={style.h2}>Quem pode jogar?</Text>
                    <Text style={style.p}><Text style={style.bold}>Todo mundo!</Text></Text>
                    <View style={{ paddingLeft: 50 }}>
                        <Text style={{}}>• Amizades em festas</Text>
                        <Text style={{}}>• Familias em casa</Text>
                        <Text style={{}}>• Professores com alunos</Text>
                        <Text style={{}}>• Colegas de trabalho</Text>
                        <Text style={{}}>• E até quem estiver entediado sozinho!</Text>
                    </View>
                </View>
                {/* fale conosco */}
                <View>
                    <Text style={style.h2}>Fale com a gente</Text>
                    <Text style={style.p}>Adoramos ouvir sugestões, ideias malucas ou só um "oi"!</Text>
                    <Text style={style.p}>Se tiver dúvidas, quiser relatar algum bug ou dar aquele feedback maroto, fala com a gente:</Text>
                    <Text style={style.p}><Text style={{ fontWeight: "bold" }}>Email:</Text> <Link style={{ textDecorationLine: "none", color: "darkblue" }} href="mailto:upcasicompany@gmail.com?subject=Sobre%20o%20Totoloto">upcasicompany@gmail.com</Link></Text>
                    <Text style={style.p}><Text style={{ fontWeight: "bold" }}>WhatsApp:</Text> <Link style={{ textDecorationLine: "none", color: "darkblue" }} href="https://wa.me/244948409127">+244948409127</Link></Text>
                    <Text style={style.p}><Text style={{ fontWeight: "bold" }}>Telefone:</Text> <Link style={{ textDecorationLine: "none", color: "darkblue" }} href="tel:+244976274337">+244976274337</Link></Text>
                    <Text style={style.p}><Text style={{ fontWeight: "bold" }}>Instagram:</Text> <Link style={{ textDecorationLine: "none", color: "darkblue" }} href="https://instagam.com/upcasi_company">@upcasi_company</Link></Text>
                </View>
                {/* Eleve o seu nivel */}
                <View>
                    <Text style={style.h2}>Eleve o seu nível</Text>
                    <Text style={style.p}>Além de se divertir com o Totoloto, que tal aumentar ainda mais a emoção e a adrenalina da sua sorte? Venha conhecer as nossas casas de apostas que vão deixar seu coração bater mais forte!</Text>

                    <Text style={style.p}>
                        Registre-se já nas nossas casas de apostas <Text style={style.bold}>clicando nas imagens abaixo</Text> e habilite-se a ganhar <Text style={style.bold}>um bônus de 200%</Text> do valor depositado em seu primeiro deposito.
                    </Text>

                    <View style={style.containerSocialmidia}>
                        <Link href="https://bantubet.co.ao/affiliates/?btag=2179860" target="_blank">
                            <Image style={style.betImage} source={require("@/assets/images/bbet.png")} />
                        </Link>
                        <Link href="https://kwanzabet.ao/affiliates/?btag=2370455" target="_blank">
                            <Image style={style.betImage} source={require("@/assets/images/kbet.png")} />
                        </Link>
                    </View>
                </View>
                {/* Ajude-nos a progredir */}
                <View>
                    <Text style={style.h2}>Ajude no desenvolvimento da App</Text>
                    <Text style={style.p}>Se este aplicativo está a ser útil para ti, considera contribuir para que possamos mantê-lo e melhorá-lo continuamente.</Text>

                    <Text style={[style.p,{fontWeight:"bold"}]}>IBAN para contribuições:</Text>
                    <Text style={style.p}>
                        AO06.0006.0000.4727.2323.3011.0
                    </Text>
                </View>
                {/* Redes Sociais */}
                <Text style={style.h2}>Nos acompanhe por aí</Text>
                <Text style={style.p}>Segue a gente nas redes sociais para ficar por dentro das novidades, novidades e outras brincadeiras.</Text>
                <View style={style.containerSocialmidia}>
                    <SocialMidia
                        link={"https://www.facebook.com/profile.php?id=100076144901720"}
                        size={64}
                        name="facebook"
                    />
                    <SocialMidia
                        name="whatsapp"
                        link={"https://chat.whatsapp.com/HaG2aryZM66BtMG0X8KRHj"}
                        size={64}
                    />
                    <SocialMidia
                        name="instagram"
                        link={"https://instagam.com/upcasi_company"}
                        size={64}
                    />
                </View>
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background,
        paddingTop: 10
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center"
    },
    textContainer: {
        alignSelf: "center",
        maxWidth: 500,
        marginTop: 20,
        padding: 10
    },
    h1: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "600"
    },
    h2: {
        marginTop: 8,
        fontWeight: "bold",
        fontSize: 22,
    },
    p: {
        marginBlock: 4,
        textIndent: "20px",
        textAlign: "justify",
        fontSize: 16
    },
    containerSocialmidia: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        paddingBottom: 10
    },
    bold: {
        fontWeight: "bold"
    },
    betImage: {
        width: 62,
        height: 62,
        borderRadius: 100
    }
})