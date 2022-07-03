+++
title= "Order #0002: Digital Media Contributions"
date= "2022-07-02"
aliases= ["/order/0002", "/fedlex/O0002"]
+++

## I. What does this policy effect
All digital media files contributed to Farer must use proper metadata, folder structure, file quality, and file naming, per this policy. 

## II. Defining proper metadata for book files
Book files should have metadata using the EPUB Open Container Format 3.2. These files must have the following tags:
  - The International Standard Book Number (ISBN) in 10-digit form
  - The title of the book in the native language and print of the book, as well as a sorted title in English and romanised
  - The series name, if applicable
  - No more than 3 genre tags sourced from the author or publisher, unless a textbook or other educational exception
  - Summary, sometimes labelled Comments, sourced from the author, the publisher, or the back-side of the book
  - The publisher name
  - The month and year of publication
  - Cover, both in folder and embedded at a size of 400x700 or higher

## IIa. Defining proper file names and folder structure for book files
Book files should be placed inside a folder titled after the book title, which should be placed inside a folder titled after the main artist of the book.

## IIb. Defining proper file containers for book files
Novels, similar text-only books, and books containing mostly words must be stored in the EPUB format and use the EPUB Open Container Format (OCF) 3.2. Graphic novels, comics, manga, and similar image-based books must be in the comic book format in either ZIP (CBZ) or RAR (CBR) format.

Books should not be converted between formats to meet these requirements, unless caution and care is taken into ensuring that the conversion is a virtually identical copy and experience to the previous format.

## III. Defining proper metadata for audio files containing music
Audio files containing music should have metadata using the IDEv2.4 tag specification and the UTF-8 encoding byte. These files must have the following tags:
  - Title (`TITLE`) in the native language and print of the song
  - Sort title (`TITLESORT`) in English and romanised
  - Artist (`ARTIST`) in the official casing and spacing of the artist
  - Sort artist (`ARTISTSORT`) in English and romanised
  - Album artist (`ALBUMARTIST`) in the official casing and spacing of the artist; if multiple artists, use `Various Artists`
  - Sort album artist (`ALBUMARTISTSORT`) in English and romanised; if multiple artists, use `Various Artists`
  - Album (`ALBUM`) in the official casing and spacing of the album
  - Sort album (`ALBUMSORT`) in English and romanised
  - Disc number (`DISCNUMBER`), if multiple discs
  - Track number (`TRACK`)
  - Year (`YEAR`) in ISO 8601 format (`YYYY-MM-DD`; an album released 7 September, 2018 would be `2018-09-07`)
  - Cover, both in folder and embedded at a size of 600x600 or higher

## IIIa. Defining proper file names and folder structure for audio files containing music
Albums with more than one disk should have songs named as `DISCNUMBER-TRACK. TITLE.ext`. Albums with only one disk should have songs named as `TRACK. TITLE.ext`.

Songs should be placed inside a folder titled after the `ALBUM` tag, which is then placed inside a folder titled after the `ARTIST` tag. The folder structure should then appear for an album as `ARTIST/ALBUM/TRACK. TITLE.ext`.

## IIIb. Defining proper audio quality for audio files containing music
Music contributions should be in the highest phesible quality. Usage of MQA is prohibited. Files should be stored inside the Free Lossless Audio Codec, or FLAC, and use the `.flac` extension. Content that exceeds 24-bit and 48000kHz should be downmuxed to fit this requirement or a minimum of 16-bit 48000kHz. Music contributions can not be lower than AAC 256, MP3 320, or an equivalent quality.

## IV. Defining proper metadata for video files
## IVa. Defining proper quality settings for video files
Video files should be placed inside the MP4 container using the `.MKV` or `.MP4` extension and encoded using the H.264 or H.265 codec. Stereo audio should be transcoded in AAC 2.0 at 192kbps CBR. Stereo audio tracks should not exceed 2 channels or 320kbps. Surround sound tracks are allowed at AC3 5.1 at 640kbps CBR. Surround sound audio tracks should not exceed 8 channels.

## IVb. Defining proper accessibility measures for video files
For content that has been official subtitled or has publicly available subtitles, a SRT, SMI, SSA/ASS, or WebVTT file is required for each audio track that contains a different language. Burnt-in subtitles are not allowed. 

## IVc. Defining proper file naming and folder structure for video files
Movies stored in video files must be titled as `TITLE (YEAR).mkv`. TV shows can use `SHOW - sXXeYY - EPISODE.mkv`, where `XX` is replaced with the season number with a leading zero and `YY` is replaced with the episode number with a leading zero, respectively.

Movies should be stored in a folder titled after the film and the year it was published (`MOVIE (YEAR)`). TV episodes should be segregated into a folder titled after their season (`Season XX`, where `XX` is replaced with the season number with a leading zero), which should be placed in a folder titled after the show name. A movie's folder structure should appear as `MOVIE (YEAR)/MOVIE (YEAR).mkv`. A TV show's folder strucutre should appear as `SHOW/Season XX/SHOW - sXXeYY - EPISODE.mkv`. Subtitle files must be named `TITLE (YEAR).LANG.srt` and should be stored in the same folder as the episode. Posters for a series or movie should be in the top directory of that movie or show and titled `poster.jpg`.

## IVci. Defining LANG
The ISO 639 standard defines nomenclatures used to classify languages. The LANG attribute uses the ISO 639-1 standard, or the ISO-639/B where needed, to differentiate between language tracks.

## V. How existing and future digital media contributions can be compliant
Media that does not meet these criteria will be flagged for deletion and its original uploader notified to provide a compliant version as soon as possible before it is removed.