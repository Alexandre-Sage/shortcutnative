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
 return (
    <View>
      <ScrollView>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={function (c) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + c)
              .then((response) => response.json())
              .then((data) => setShortcuts(data["hydra:member"]))
            setSelectedCategory(c);
          }}
        >
          {categorieJsx}
        </Picker>
        {shortcutsJsx}
      </ScrollView>
    </View>
  );
}




http://shortcuts.api.pierre-jehan.com/shortcuts?categories.id=1

http://shortcuts.api.pierre-jehan.com/shortcuts?page=1
