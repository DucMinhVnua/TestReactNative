import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#DDD',
  },

  wrapper_btn: {
    paddingTop: 30,
    alignItems: 'center',
  },

  btn: {
    width: '50%',
    paddingVertical: 20,
    backgroundColor: '#c82828',
    alignItems: 'center',
    borderRadius: 10,
  },

  btn_title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  wrapper_column: {justifyContent: 'space-between'},

  flatList: {paddingHorizontal: 20, flexGrow: 1},
});

export default styles;
