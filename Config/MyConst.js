import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const notificationBar = getStatusBarHeight();
export const screenHeight = Dimensions.get("window").height + notificationBar;
export const colorPrimary = '#0d6efd';
export const colorSuccess = '#198754';
export const colorDanger = '#dc3545';
export const colorWarning = '#ffc000';
export const colorInfo = '#0dcaf0';
export const colorLight = '#dedede';
export const colorDark = '#3e3e3e';
export const containerPadding = 12;
export const UID = 3567;
export const primaryHeading = {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
};