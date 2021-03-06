import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Icon, Container, Header, Content, Body, Left, Right, Title, Button } from 'native-base';

export default class ProfileTab extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Icon name="person" style={{ color: tintColor }} />
	};

	render() {
		return (
			<Container>
				{/* Navbar */}
				<Header style={styles.androidHeader}>
					<Left>
						<Icon name="person-add" style={{ paddingLeft: 10 }} />
					</Left>
					<Body style={styles.androidTitle}>
						<Text
							style={{
								color: 'black'
							}}>
							AinulBedjo
						</Text>
					</Body>
					<Right>
						<EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 27 }} />
					</Right>
				</Header>
				{/* Content */}
				<Content style={{ padding: 10 }}>
					<View
						style={{
							flexDirection: 'row'
						}}>
						<View style={{ flex: 1 }}>
							<Image
								source={require('../../../assets/feeder/feed-1.jpg')}
								style={{
									width: 75,
									height: 75,
									borderRadius: 37.5
								}}
							/>
						</View>
						<View style={{ flex: 3, flexDirection: 'column' }}>
							{/* posts followers and following */}
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-around'
								}}>
								<View style={{ alignItems: 'center' }}>
									<Text style={styles.boldNum}>20</Text>
									<Text style={styles.textTop}>posts</Text>
								</View>
								<View style={{ alignItems: 'center' }}>
									<Text style={styles.boldNum}>320</Text>
									<Text style={styles.textTop}>followers</Text>
								</View>
								<View style={{ alignItems: 'center' }}>
									<Text style={styles.boldNum}>32</Text>
									<Text style={styles.textTop}>following</Text>
								</View>
							</View>
							{/* Button edit and setting */}
							<View style={{ flexDirection: 'row', marginTop: 10 }}>
								<Button
									bordered
									dark
									style={{
										flex: 3,
										marginLeft: 10,
										justifyContent: 'center',
										height: 30
									}}>
									<Text>Edit Profile</Text>
								</Button>

								<Button
									bordered
									dark
									style={{
										justifyContent: 'center',
										height: 30,
										flex: 1,
										marginLeft: 10,
										marginRight: 5
									}}>
									<Icon name="settings" />
								</Button>
							</View>
						</View>
					</View>
					<View>
						<Text>
							lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
							lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
						</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	androidHeader: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight,
				backgroundColor: 'white'
			}
		})
	},
	androidTitle: {
		...Platform.select({
			android: {
				alignItems: 'flex-end'
			}
		})
	},
	boldNum: {
		fontWeight: '700'
	},
	textTop: {
		marginTop: -5
	}
});
