+++
title= "Contributing media to the Plex server"
+++

You will need to format metadata into the files prior to uploading. [Remember to follow the contribution guidelines.](@/farer-and-you/contribution_policy.md)

## Contributing music
All songs should contain the following metadata:
- Title (in native language)
- Sort Title (Romanised)
- Artist and Album artst (in native language)
- Sort Artist and Sort Album artist (Romanised)
- Disc number, if multiple disks
- Track number (if single, use `1`)
- Genre
- Year, in format of `YYYY-MM-DD` (example: `2018-09-07`)
- Cover, at least 600x600 resolution

Songs should be formatted as `DISCNO-TRACKNO. TRACK NAME.ext`. If there is no track number, omit it and the leading hyphen (`TRACKNO. TRACK NAME.ext`). You should put songs inside a folder titled after the album. That folder should be inside a folder titled after the artist. (example: `$uicideboy$\I Want to Die In New Orleans\01. King Tulip.flac`)

Music contributions should be in the highest phesible quality. Do not use MQA or other falliable formats. Ideally, use FLAC and, if needed, transcode when streaming to AAC 128 or similar. Content that exceeds 24-bit and 48000kHz will, at some point, be transcoded down to this quality. This is both a space saving measure and a sanity check that you can't even hear over 16-bit 41000kHz. Exceptions can be made upon request. Music cannot be lower than AAC 256 or MP3 320; music below this threshold will be deleted with a warning, with following incidents using [the 3-strike policy.](@/farer-and-you/contribution_policy.md)

[We are currently exploring alternative methods to host music content.](https://github.com/farer-group/wiki/issues/3)

## Contributing movies and musicals
We are still researching the best containers and formats to ensure the least needed transcoding to play on modern devices. For the time being, refrain from uploading. If you must, upload at most 4K-quality content and stream without transcoding. [A proposal has been made to create the Farer standard for uploading.](https://github.com/farer-group/wiki/issues/8)

## Contributing music videos
We are still researching the best containers and formats to ensure the least needed transcoding to play on modern devices. For the time being, refrain from uploading. If you must, upload at most 4K-quality content and stream without transcoding. [A proposal has been made to create the Farer standard for uploading.](https://github.com/farer-group/wiki/issues/8)