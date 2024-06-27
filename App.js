import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';


const data = [
  {
    title: 'Patient timing change',
    description: 'Patient rescheduled their meetup',
    icon: require('./assets/refresh.png')
  },
  {
    title: 'New enquiry',
    description: 'New patient book an appointment',
    icon: require('./assets/enquiry.png')
  },
  {
    title: 'New Appointment',
    description: 'Patient booked an appointment',
    icon: require('./assets/appointment.png')
  },
  {
    title: 'Doctor apply for leave',
    description: 'Doctor in your team apply for leave',
    icon: require('./assets/leave.png')
  }
]



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header />
      
        <View>
          {data.map((item, index) => {
            return (
              <ListItem key={index} title={item.title} description={item.description} icon={item.icon} />
            )
          })}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  subContainer: {
    height: '90%',
    width: '100%',
    backgroundColor: '#FFF',
    padding: 15,
    shadowColor: '#9EFFF9',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    // Android shadow arround
    elevation: 5,

  }
});
