const shortcutsJsx = this.state.importShortcuts.map((shortcut) => (  /*Shortcuts= importShortcuts*/

      <View key={shortcut.id}>
        <Text>{shortcut.title}</Text>
        <Text>{shortcut.software.name}</Text>
        <View>
          {shortcut.categories.map((cat) => (
            <Text key={cat.id}>
              {cat.name}
            </Text>
          ))}
        </View>
      </View>

  ));
