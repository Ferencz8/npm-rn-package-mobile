import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ViewStyle,
} from "react-native";

export type ScreenContainerProps = {
  title?: string;
  subtitle?:string;
  primaryLabel?: string;
  onPrimaryPress?: () => void;
  style?: ViewStyle;
};

export const ScreenContainer: React.FC<
  React.PropsWithChildren<ScreenContainerProps>
> = ({ title, children, primaryLabel = "Continue", onPrimaryPress, style , subtitle}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>
        {title ? <Text style={styles.title}>{title + 'v2'}</Text> : null}

        {subtitle ? <Text style={styles.title}>{subtitle }</Text> : null}
        <View style={styles.content}>{children}</View>

        {onPrimaryPress ? (
          <View style={styles.footer}>
            <Button title={primaryLabel} onPress={onPrimaryPress} />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingTop: 12,
  },
});
