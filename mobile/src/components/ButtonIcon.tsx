import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "native-base";

interface Props extends TouchableOpacityProps {
  icon: React.FC<IconProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  const { colors, sizes } = useTheme();

  return (
    <TouchableOpacity {...rest}>
      <Icon color={colors.blue[90]} size={sizes[6]} />
    </TouchableOpacity>
  );
}