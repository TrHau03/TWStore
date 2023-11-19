import { StyleSheet, Text, View, Image, Pressable, } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Enterotp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../asset/img/OTP.png')} />
      <Text style={styles.text1}>Xác minh OTP</Text>
      <Text style={styles.text2}>OTP đã gửi vui lòng check Email hoặc tin nhắn</Text>
      <Pressable>
        <Text style={styles.text3}>
          Gửi lại mã
        </Text>
      </Pressable>
      <OTPInputView
        style={styles.otpInputView}
        pinCount={4}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}/>
      <Pressable style={styles.btn}>
        <Text style={styles.textbtn}>Xác Nhận</Text>
      </Pressable>
    </View>
  )
}

export default Enterotp

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40
  },
  text2: {
    fontSize: 16,
    color: 'black',
    marginTop: 30
  },
  btn: {
    marginTop: 30,
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#46C9F3'
  },
  textbtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24
  },
  text3: {
    marginTop: 10,
    color: '#0E78DA',
  },
  otpInputView: {
    width: '80%',
    height: 100,
  },
  underlineStyleBase: {
    width: 30,
    height: 45, 
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: 'black',
    color: 'black'
  },
  underlineStyleHighLighted: {
    borderColor: 'black',
  },
})