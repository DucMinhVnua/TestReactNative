import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {TypeResRandomUser} from '../../constant/types/res_randomUser';
import colors from '../../res/colors';
import CardList from '../../components/CardList';

const data = [
  {
    id: 2972,
    uid: '125bba2e-8287-4e3d-bdc3-11df127da1ae',
    password: 'bS9glZNJuE',
    first_name: 'Nita',
    last_name: 'Mills',
    username: 'nita.mills',
    email: 'nita.mills@email.com',
    avatar:
      'https://robohash.org/repellatsuntsapiente.png?size=300x300&set=set1',
    gender: 'Non-binary',
    phone_number: '+48 157.086.7253 x32757',
    social_insurance_number: '543229009',
    date_of_birth: '1987-01-11',
    employment: {
      title: 'Mining Engineer',
      key_skill: 'Networking skills',
    },
    address: {
      city: 'Rippinfurt',
      street_name: 'Stevie Rapids',
      street_address: '232 Schumm Forest',
      zip_code: '61292-8635',
      state: 'Georgia',
      country: 'United States',
      coordinates: {
        lat: 62.83331034779118,
        lng: 129.02784085732344,
      },
    },
    credit_card: {
      cc_number: '4585-7961-8763-9495',
    },
    subscription: {
      plan: 'Free Trial',
      status: 'Pending',
      payment_method: 'Cheque',
      term: 'Payment in advance',
    },
  },
  {
    id: 9360,
    uid: '25d2be46-3b65-4004-8bbb-02949fda8362',
    password: '0ZQ31yfdSp',
    first_name: 'Aundrea',
    last_name: 'Jacobson',
    username: 'aundrea.jacobson',
    email: 'aundrea.jacobson@email.com',
    avatar:
      'https://robohash.org/etpariaturconsequuntur.png?size=300x300&set=set1',
    gender: 'Non-binary',
    phone_number: '+34 (759) 010-8934',
    social_insurance_number: '768647059',
    date_of_birth: '1958-07-15',
    employment: {
      title: 'Direct Assistant',
      key_skill: 'Technical savvy',
    },
    address: {
      city: 'Julestad',
      street_name: 'Maren Heights',
      street_address: '87751 Crooks Dam',
      zip_code: '43439-0110',
      state: 'North Dakota',
      country: 'United States',
      coordinates: {
        lat: -60.84430815777566,
        lng: 39.36050415489822,
      },
    },
    credit_card: {
      cc_number: '6771-8978-3269-3298',
    },
    subscription: {
      plan: 'Essential',
      status: 'Blocked',
      payment_method: 'Cash',
      term: 'Annual',
    },
  },
  {
    id: 2303,
    uid: 'b702bdc7-b200-492c-a0ed-9a5fb5f51e65',
    password: 'zl8ioh6Bne',
    first_name: 'Mira',
    last_name: 'Zemlak',
    username: 'mira.zemlak',
    email: 'mira.zemlak@email.com',
    avatar:
      'https://robohash.org/possimussedtemporibus.png?size=300x300&set=set1',
    gender: 'Genderqueer',
    phone_number: '+48 (215) 741-1010 x8007',
    social_insurance_number: '183484393',
    date_of_birth: '1984-01-13',
    employment: {
      title: 'Future Construction Strategist',
      key_skill: 'Communication',
    },
    address: {
      city: 'East Longbury',
      street_name: 'Ethelene Cliff',
      street_address: '35261 Boyle Heights',
      zip_code: '64693-6607',
      state: 'Minnesota',
      country: 'United States',
      coordinates: {
        lat: -54.46502160049911,
        lng: -30.49167590251318,
      },
    },
    credit_card: {
      cc_number: '4105-0776-4956-8882',
    },
    subscription: {
      plan: 'Professional',
      status: 'Active',
      payment_method: 'WeChat Pay',
      term: 'Full subscription',
    },
  },
  {
    id: 3186,
    uid: '02ab9723-c5e7-4275-82fa-48fdbfff960f',
    password: 'sy1n92keWR',
    first_name: 'Domenica',
    last_name: 'Cruickshank',
    username: 'domenica.cruickshank',
    email: 'domenica.cruickshank@email.com',
    avatar: 'https://robohash.org/estvoluptatemest.png?size=300x300&set=set1',
    gender: 'Polygender',
    phone_number: '+1-784 487.847.8458 x36644',
    social_insurance_number: '662186543',
    date_of_birth: '1985-12-06',
    employment: {
      title: 'Dynamic Advertising Analyst',
      key_skill: 'Leadership',
    },
    address: {
      city: 'New Tempietown',
      street_name: 'Kilback Mall',
      street_address: '482 Kendall Lodge',
      zip_code: '25175-4625',
      state: 'Connecticut',
      country: 'United States',
      coordinates: {
        lat: -7.160307737371383,
        lng: -168.71503708570503,
      },
    },
    credit_card: {
      cc_number: '5469-8479-6813-6967',
    },
    subscription: {
      plan: 'Platinum',
      status: 'Pending',
      payment_method: 'Money transfer',
      term: 'Monthly',
    },
  },
  {
    id: 3859,
    uid: '0a32b2b0-2c89-4a0c-b4d6-56ae8fef2cfa',
    password: '0IHTM37ZzR',
    first_name: 'Alana',
    last_name: 'Abernathy',
    username: 'alana.abernathy',
    email: 'alana.abernathy@email.com',
    avatar: 'https://robohash.org/assumendaessenihil.png?size=300x300&set=set1',
    gender: 'Non-binary',
    phone_number: '+41 (201) 888-3389 x71854',
    social_insurance_number: '666942065',
    date_of_birth: '1993-02-03',
    employment: {
      title: 'Investor Farming Associate',
      key_skill: 'Technical savvy',
    },
    address: {
      city: 'Port Quintin',
      street_name: 'Jonathan Haven',
      street_address: '501 Deckow Points',
      zip_code: '32271',
      state: 'Colorado',
      country: 'United States',
      coordinates: {
        lat: -27.390000490765132,
        lng: 169.63910795030023,
      },
    },
    credit_card: {
      cc_number: '4896649504047',
    },
    subscription: {
      plan: 'Standard',
      status: 'Pending',
      payment_method: 'Google Pay',
      term: 'Full subscription',
    },
  },
  {
    id: 167,
    uid: '9dcc7fe5-231f-4a06-b06d-7fcae0b86e66',
    password: 'cztIDORNjo',
    first_name: 'Brianne',
    last_name: 'Collins',
    username: 'brianne.collins',
    email: 'brianne.collins@email.com',
    avatar: 'https://robohash.org/enimdebitisquos.png?size=300x300&set=set1',
    gender: 'Male',
    phone_number: '+98 921.504.2441 x8350',
    social_insurance_number: '777771148',
    date_of_birth: '1973-11-22',
    employment: {
      title: 'Internal Director',
      key_skill: 'Leadership',
    },
    address: {
      city: 'West Rufus',
      street_name: 'Stamm Brooks',
      street_address: '5995 Deann Parks',
      zip_code: '18704',
      state: 'Alaska',
      country: 'United States',
      coordinates: {
        lat: 86.21617520690663,
        lng: -85.89001880445016,
      },
    },
    credit_card: {
      cc_number: '5454-6485-9570-0630',
    },
    subscription: {
      plan: 'Bronze',
      status: 'Pending',
      payment_method: 'Cash',
      term: 'Monthly',
    },
  },
  {
    id: 5834,
    uid: '62999b39-4430-4c0d-9289-680ae227ac38',
    password: 'UI2iERpbJB',
    first_name: 'Magan',
    last_name: 'Marquardt',
    username: 'magan.marquardt',
    email: 'magan.marquardt@email.com',
    avatar: 'https://robohash.org/rerumnullaquia.png?size=300x300&set=set1',
    gender: 'Polygender',
    phone_number: '+47 1-300-514-9169 x065',
    social_insurance_number: '408499432',
    date_of_birth: '1980-09-13',
    employment: {
      title: 'Sales Liaison',
      key_skill: 'Problem solving',
    },
    address: {
      city: 'Jospehburgh',
      street_name: 'Brice Coves',
      street_address: '180 Reichel Locks',
      zip_code: '24808',
      state: 'Florida',
      country: 'United States',
      coordinates: {
        lat: -70.88130758319156,
        lng: -73.42534269225806,
      },
    },
    credit_card: {
      cc_number: '6771-8934-2956-6476',
    },
    subscription: {
      plan: 'Premium',
      status: 'Blocked',
      payment_method: 'Debit card',
      term: 'Full subscription',
    },
  },
  {
    id: 2133,
    uid: '880a42d0-21a4-4d71-9651-33a550316ba4',
    password: 'i30yslFpAD',
    first_name: 'Don',
    last_name: 'Kshlerin',
    username: 'don.kshlerin',
    email: 'don.kshlerin@email.com',
    avatar: 'https://robohash.org/repellatvitaevelit.png?size=300x300&set=set1',
    gender: 'Genderfluid',
    phone_number: '+61 541-834-3012',
    social_insurance_number: '585626930',
    date_of_birth: '1998-12-22',
    employment: {
      title: 'Internal Liaison',
      key_skill: 'Confidence',
    },
    address: {
      city: 'West Brittani',
      street_name: 'Kilback Alley',
      street_address: '4682 Darius Pike',
      zip_code: '38286-3575',
      state: 'Connecticut',
      country: 'United States',
      coordinates: {
        lat: -65.96745193456272,
        lng: 45.49115522758623,
      },
    },
    credit_card: {
      cc_number: '4455387514450',
    },
    subscription: {
      plan: 'Essential',
      status: 'Blocked',
      payment_method: 'WeChat Pay',
      term: 'Annual',
    },
  },
  {
    id: 1291,
    uid: 'c8b5fce4-0cf0-4961-a1e8-0ed2fa7156b9',
    password: 'jqSgFpkWL0',
    first_name: 'Jamey',
    last_name: 'Aufderhar',
    username: 'jamey.aufderhar',
    email: 'jamey.aufderhar@email.com',
    avatar: 'https://robohash.org/beataeistevoluptas.png?size=300x300&set=set1',
    gender: 'Bigender',
    phone_number: '+850 (450) 110-6297 x98859',
    social_insurance_number: '754504629',
    date_of_birth: '1996-07-04',
    employment: {
      title: 'Dynamic Director',
      key_skill: 'Confidence',
    },
    address: {
      city: 'New Sid',
      street_name: 'Hiram Ports',
      street_address: '217 Willia Garden',
      zip_code: '26681',
      state: 'Mississippi',
      country: 'United States',
      coordinates: {
        lat: -75.32316356197632,
        lng: 57.064791358628355,
      },
    },
    credit_card: {
      cc_number: '6771-8990-2547-3850',
    },
    subscription: {
      plan: 'Business',
      status: 'Idle',
      payment_method: 'Paypal',
      term: 'Full subscription',
    },
  },
  {
    id: 9258,
    uid: 'e2c9e80a-eace-4f3a-8c90-14a27c3ded4a',
    password: 'QN7XLEY3qM',
    first_name: 'Trinity',
    last_name: 'Ernser',
    username: 'trinity.ernser',
    email: 'trinity.ernser@email.com',
    avatar: 'https://robohash.org/earumiustoqui.png?size=300x300&set=set1',
    gender: 'Agender',
    phone_number: '+351 876-967-8103 x0980',
    social_insurance_number: '538328477',
    date_of_birth: '1994-09-23',
    employment: {
      title: 'Hospitality Specialist',
      key_skill: 'Teamwork',
    },
    address: {
      city: 'Estrellaborough',
      street_name: 'Padberg Burgs',
      street_address: '95330 Vito Street',
      zip_code: '08351-3892',
      state: 'New York',
      country: 'United States',
      coordinates: {
        lat: -60.22829719621704,
        lng: 174.1540010928291,
      },
    },
    credit_card: {
      cc_number: '5515-8298-4722-9324',
    },
    subscription: {
      plan: 'Diamond',
      status: 'Pending',
      payment_method: 'Debit card',
      term: 'Annual',
    },
  },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* card list */}
      <FlatList
        columnWrapperStyle={styles.wrapper_column}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={() => (
          <View style={styles.wrapper_btn}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
              <Text style={styles.btn_title}>Fetch Random</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        data={data}
        renderItem={({item}) => <CardList item={item} />}
        keyExtractor={(item: TypeResRandomUser) => item.id}
      />
    </View>
  );
};

export default HomePage;
