import {Pressable, StyleSheet, TextInput, ViewStyle} from 'react-native';
import {useRef, useState} from 'react';
import {useDebouncedFn} from '../hooks/useDebounce';
import {TEXT_REGULAR} from '../constants/TextStyling';
import {useThemeColor} from '../hooks/useThemeColor';
import SearchIcon from '../assets/svg/SearchIcon';
import CrossIcon from '../assets/svg/CrossIcon';

interface Props {
  palceholder: string;
  searchCb: (text: string) => void;
  minLength?: number;
  style?: ViewStyle;
  onClear?: () => void;
}

export const SearchInput = ({
  palceholder,
  searchCb,
  minLength = 2,
  style,
  onClear,
}: Props) => {
  const {Colors} = useThemeColor();

  const inputRef = useRef<TextInput>(null);
  const [showClearIcon, setShowClearIcon] = useState(false);
  const debouncedSearch = useDebouncedFn((t: string) => {
    t.length > minLength && searchCb(t);
  });

  return (
    <Pressable
      onPress={() => inputRef.current!.focus()}
      style={[
        styles.cont,
        StyleSheet.flatten(style),
        {borderColor: Colors.primary},
      ]}>
      <SearchIcon color={Colors.primary} />
      <TextInput
        onChangeText={t => {
          if (t.length === 0) onClear?.();
          setShowClearIcon(t.length > 0);
          debouncedSearch(t);
        }}
        ref={inputRef}
        style={[styles.input, {color: Colors.primary}]}
        placeholder={palceholder}
        placeholderTextColor={Colors.primary}
      />
      {showClearIcon && (
        <Pressable onPress={()=>{
          inputRef.current?.clear();
          onClear?.();
          setShowClearIcon(false);
        }}>
          <CrossIcon />
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    ...TEXT_REGULAR,
    flex: 1,
  },
});
