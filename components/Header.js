import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.emailTxt}>Email Notification</Text>

        <View>
            <Text style={styles.inboxTxt}>Inbox</Text>
            <Text style={styles.text}>Manage your message notification preferences</Text>
        </View>
      
      <View style={styles.btnContainer}>
        <Text style={styles.active}>All</Text>
        <View style={styles.middle}>
        <Text style={styles.text}>Mentions only</Text>
        <Text style={styles.text}>|</Text>
        </View>
        <Text style={styles.lastTxt}>Nothing</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
    emailTxt: {
        fontSize: 25,
        color: '#676767',
    },
    inboxTxt: {
        fontSize: 25,
        marginTop: 10,
    },
    text: {
        fontSize:18,
        color: '#676767',
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        borderRadius: 10,
    },
    lastTxt: {
        width: '30%',
        fontSize: 18,
        color: '#676767',
        padding: 10,
        textAlign: 'center',
    },
    middle: {
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    active: {
        width: '33%',
        fontSize: 18,
        color: '#FFF',
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#00A272',
        borderRadius: 10,
    }
});
