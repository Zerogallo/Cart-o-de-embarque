
import {  ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { Flight } from '@/components/flight';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/styles/colors';
import { Info } from '@/components/info';
import QRcode from "react-native-qrcode-svg"
import Svg, {Line, Circle} from "react-native-svg"

export  function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      style={styles.hearder} 
      source={require("@/assets/Lucid.jpg")}
      >
        <View  style={styles.boxTitle} >

        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>falta 45 dias para viagem</Text>
        </View>


      </ImageBackground>
     <View style={styles.ticket}>
      <View style={styles.content}>
        <View style={styles.flight}>
          <Flight label='São Paulo' value='GRU'/>
          <View style={styles.duration}>
            <Ionicons name='airplane-sharp' size={32} color= {Colors.black}/>
            <Text style={styles.hours}>9H 45MIN

            </Text>

          </View>
          <Flight label='Nova York' value='JKF'/>

        </View>

        <Text style={styles.lebal}>Passageiro</Text>
        <Text style={styles.name}>Renan Ferreira</Text>
        <View style={styles.details}>
          <View style={styles.inline}>

          <Info label='Data' value='17 de Nov.'/>
          <Info label='Embarque' value='17:24'/>
          </View>
        </View>
      </View>
      <View>
        <Svg height={20} width="100%">
          <Line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke={Colors.gray[400]}
          strokeWidth={1}
          strokeDasharray="5,5"
          />
          <Circle r={8} cx="0%" cy="50%" fill={Colors.black}/>
          <Circle r={8} cx="100%" cy="50%" fill={Colors.black}/>
        </Svg>

      </View>
      <View style={styles.footer}>
        <View style={styles.footerComtnt}>

          <View style={styles.inline}>
          <Info label='Voo' value='YZ 607'/>
          <Info label='Assento' value='29G'/>
          </View>

           <View style={styles.inline}>
          <Info label='Terminal' value='7'/>
          <Info label='Portão' value='39'/>
          </View>

        </View>
          <QRcode value='https://github.com/Zerogallo'/>

      </View>
     </View>
    </View>
  );
}

