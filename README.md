# WARNING: This library is broken :(
# Using the library

Each page (or layout), which requires spotify data must run the `fetchSpotifyData()` function, to ensure data loading before the initialisation of components.
The fetchSpotifyData() function can be modified as needed to return data from somewhere else, as long as the returned data is parsable by processData().

This library wasn't really intended for external use by third-parties, and as such no support will be provided other than this documentation.

WARNING: This library only supports svelte projects at this time.

# Player components
NOTE: All of these components need to listen to stores from the lib/utils directory. If you are modifying the data retrieval method from Spotify's API,
and you decide that you want to completely rework the lib/utils functions, ensure that you include stores for:
> ColorPalette (colorUtils.ts)
> CurrentColor (colorUtils.ts)
> data (spotifyUtils.ts)
> isLoading (spotifyUtils.ts)
> error (spotifyUtils.ts)

## SpotifyPlayer.svelte
The Player/SpotifyPlayer component is the entrypoint for the Player.

## Extras/ThemePickerText.svelte
ThemePickerText creates a span of text which will act as a selector for the player's background-color.
When a character is hovered, the corresponding index in the colorPalette() store is set as the text color.
ThemePickerText.svelte expects an array of strings to be passed as a prop.

WARNING: ThemePickerText supports no more than 5 characters in an array and will likely error if supplied with more than 5, due to the nature of the returned
color data. This may be reworked in the future to allow more than 5 characters, only with regular text appended after the maximum of 5 responsive characters.

## Extras/ThemePickerColor.svelte
ThemePickerColor creates a span of <div> elements, all of which are 6rem wide buttons which when clicked, will set the background color of the player element.
No other background or elements are included to allow the component to be easily slotted in anywhere and customised as needed.

## TrackProgress.svelte
Responsible for creating the player head for the player component. Listens to the $data store from spotifyUtils.ts.

## ArtistList.svelte
Creates the artist list based on the [artists] field of the returned spotify data.

