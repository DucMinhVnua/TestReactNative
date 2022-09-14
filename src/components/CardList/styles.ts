import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '48%',
    minHeight: 200,
    borderRadius: 10,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  avatar: {
    width: '100%',
    height: 100,
  },

  wrapperContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
